import React from "react";

export const Strong = props => (
    <strong style={{ color: "#f7df1e" }}>{props.children}</strong>
);

export const Header = ({ children: title }) => (
    <h1 style={{ color: "green" }}>{title}</h1>
);

export const BlinkingText = ({ children: title }) => (
    <h1 className="blinkingText">{title}</h1>
);

export const Center = ({ children: content }) => (
    <div style={{ textAlign: "center" }}>{content}</div>
);

export const DayNightToggle = () => (
    <div className="reset toggle toggle--daynight">
        <input
            className="reset toggle--checkbox"
            type="checkbox"
            id="toggle--daynight"
        />
        <label className="reset toggle--btn" htmlFor="toggle--daynight">
            <span className="reset toggle--feature" />
        </label>
    </div>
);
