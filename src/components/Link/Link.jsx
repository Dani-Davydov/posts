import * as SC from "./styles.js";

export const Link = ({ simple = true, children, ...props }) => {
    return (
        simple ? <SC.SimpleLink {...props}>{children}</SC.SimpleLink> : <SC.NavigationLink {...props}>{children}</SC.NavigationLink>
    )
}