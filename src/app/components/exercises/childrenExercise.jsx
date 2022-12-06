import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const ListComponent = ({ children }) => {
    return (
        <ol>
        {
            React.Children.toArray(
                children
            ).map((child, index) => {
                return (
                    <li
                        key={child.key}
                    >
                        {child}
                    </li>
                );
            })
        }
    </ol>
);
};

const Component = () => {
    return <div>Компонент списка</div>;
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
