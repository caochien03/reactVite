import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    UserOutlined,
    HomeOutlined,
    ProductOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Header() {
    const [current, setCurrent] = useState("");
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: "users",
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/products"}>Products</Link>,
            key: "products",
            icon: <ProductOutlined />,
        },
        {
            label: "Cài đặt",
            key: "setting",
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                    key: "login",
                },
                {
                    label: "Đăng xuất",
                    key: "logout",
                },
            ],
        },
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header;
