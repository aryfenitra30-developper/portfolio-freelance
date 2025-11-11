<?php
// Chemin absolu depuis le container
$db_path = __DIR__ . '/messages.sqlite';

// Crée la DB si elle n'existe pas
$pdo = new PDO("sqlite:$db_path");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Création de la table si elle n'existe pas
$pdo->exec("CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at TEXT
)");

// Récupérer les données du POST
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$created_at = date('Y-m-d H:i:s');

// Insérer le message
$stmt = $pdo->prepare("INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, ?)");
$stmt->execute([$name, $email, $message, $created_at]);

echo "Message enregistré !";
