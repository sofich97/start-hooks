import React from "react";

const simpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button onClick={onLogOut}>Выйти из системы</button>
    ) : (
        <button onClick={onLogin}>Войти в систему</button>
    );
};

export default simpleComponent;
