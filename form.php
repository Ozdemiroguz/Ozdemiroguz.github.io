<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilgi Gönderme Formu</title>
</head>
<body>
    <h2>Bilgi Gönderme Formu</h2>

    <?php
    // Form gönderildiğinde çalışacak PHP kodu
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Form verilerini alıyoruz
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // Hedef e-posta adresi
        $to = "sizinmailadresiniz@example.com";  // Buraya kendi e-posta adresinizi yazın

        // E-posta başlığı
        $subject = "Yeni Mesaj: $name";

        // E-posta içeriği
        $body = "Ad: $name\n";
        $body .= "E-posta: $email\n\n";
        $body .= "Mesaj:\n$message";

        // E-posta başlıkları
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // E-postayı gönderme
        if (mail($to, $subject, $body, $headers)) {
            echo "<p style='color: green;'>Mesajınız başarıyla gönderildi!</p>";
        } else {
            echo "<p style='color: red;'>Mesajınız gönderilirken bir hata oluştu.</p>";
        }
    }
    ?>

    <!-- Form -->
    <form action="" method="post">
        <label for="name">Adınız:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">E-posta:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="message">Mesajınız:</label><br>
        <textarea id="message" name="message" rows="4" required></textarea><br><br>

        <button type="submit">Gönder</button>
    </form>
</body>
</html>
