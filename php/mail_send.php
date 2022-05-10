<?php

    session_start();
    require_once 'connect.php';

    $full_name = $_POST['full_name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $user_text = $_POST['user_text'];
    

    if ($email) {
        

        mysqli_query($connect, "INSERT INTO `mails` (`id`, `full_name`, `phone_number`, `email`, `user_text`) VALUES (NULL, '$full_name','$phone_number','$email','$user_text')");

        $_SESSION['mail_message'] = 'Успешно! Спасибо за обращение!';
        header('Location: ../pages/ask.php');
        
        

    } else {
        $_SESSION['mail_message'] = 'Ошибка! проверьте правильность данных';
        header('Location: ../pages/ask.php');
    }

?>
