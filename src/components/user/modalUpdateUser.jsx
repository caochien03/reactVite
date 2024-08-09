import { Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/apiService";
const ModalUpdateUser = (props) => {
    // eslint-disable-next-line react/prop-types
    const {
        isModalUpdateOpen,
        setIsModalUpdateOpen,
        dataUpdate,
        setDataUpdate,
        loadUser,
    } = props;
    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        if (dataUpdate != null) {
            setFullName(dataUpdate.fullName);
            setID(dataUpdate._id);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate]);
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "Update User",
                description: "Cập nhật user thành công",
            });
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message),
            });
        }
    };

    const resetAndCloseModal = () => {
        setDataUpdate(null);
        setIsModalUpdateOpen(false);
        setFullName("");
        setID("");
        setPhone("");
    };
    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            okText="SAVE"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    margin: "20px",
                }}
            >
                <div>
                    <span>ID</span>
                    <Input value={id} disabled />
                </div>
                <div>
                    <span>Full name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>
        </Modal>
    );
};
export default ModalUpdateUser;
