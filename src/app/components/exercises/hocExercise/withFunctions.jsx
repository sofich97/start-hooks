import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = Boolean(localStorage.getItem("auth"));
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFunctions;
