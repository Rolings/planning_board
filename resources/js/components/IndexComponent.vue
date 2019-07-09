<template>
    <div class="container">
        <form method="post" action="" class="login">
            <p>
                <label for="login">Логин:</label>
                <input type="text" name="login" id="login" value="name@example.com">
            </p>

            <p>
                <label for="password">Пароль:</label>
                <input type="password" name="password" id="password" value="4815162342">
            </p>

            <p class="login-submit">
                <button type="submit" class="login-button">Войти</button>
            </p>

            <p class="forgot-password"><a href="index.html">Забыл пароль?</a></p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "IndexComponent"
    }
</script>

<style scoped>

</style>
