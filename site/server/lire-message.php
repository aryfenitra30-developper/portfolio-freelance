<?php
header('Content-Type: application/json');

try {
    // Chemin absolu vers la base SQLite
    $db_path = __DIR__ . '/messages.sqlite';

    if (!file_exists($db_path)) {
        echo json_encode([]);
        exit;
    }

    $pdo = new PDO("sqlite:$db_path");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupère tous les messages
    $stmt = $pdo->query("SELECT id, name, email, message, created_at FROM messages ORDER BY id DESC");
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retourne les messages en JSON
    echo json_encode($messages);

} catch (Exception $e) {
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);
}
