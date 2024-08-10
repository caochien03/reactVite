import { Drawer } from "antd";
import { useEffect, useState } from "react";

const ViewDetailUser = (props) => {
    const { detailUser, setDetailUser, isDetailOpen, setIsDetailOpen } = props;

    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (detailUser != null) {
            setFullName(detailUser.fullName);
            setID(detailUser._id);
            setPhone(detailUser.phone);
            setEmail(detailUser.email);
        }
    }, [detailUser]);

    // const handleShowDetail =() => {
    //     const
    // }

    const resetAndCloseDetail = () => {
        setDetailUser(null);
        setIsDetailOpen(false);
        setFullName("");
        setID("");
        setPhone("");
        setEmail("");
    };
    return (
        <Drawer
            title="User Detail"
            onClose={() => resetAndCloseDetail()}
            open={isDetailOpen}
        >
            <p>ID: {id}</p>
            <br />
            <p>Full Name: {fullName}</p>
            <br />
            <p>Phone: {phone}</p>
            <br />
            <p>email: {email}</p>
        </Drawer>
    );
};
export default ViewDetailUser;
