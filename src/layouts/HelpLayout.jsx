import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore sapiente ad reprehenderit dolorum voluptate, laborum officia, velit quidem perferendis odit totam in magni, dolore omnis quis aliquam libero delectus.</p>
            <header>
                <nav>
                    <NavLink to='faq'>View the FAQ</NavLink>
                    <NavLink to='vmware'>Virual Machines</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}
