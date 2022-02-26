import { FunctionComponent } from "react";
import { Category } from "../types";


export const NavItem: FunctionComponent<{ value: Category | "all"; handlerFilterCategoy: Function; active: string }> = ({
    value,
    handlerFilterCategoy,
    active
}) => {
    let className = "capitalize cursor-pointer hover:text-green"
    if (active === value)
        className += " text-green"
    return (
        <li className={className} onClick={() => handlerFilterCategoy(value)}>{value}</li>
    );
};


const ProjectsNavbar: FunctionComponent<{ handlerFilterCategoy: Function, active: string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="django" {...props} />
            <NavItem value="node" {...props} />
        </div>
    )
}

export default ProjectsNavbar