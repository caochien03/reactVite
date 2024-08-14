import { Button, Drawer, notification } from "antd";
import { useEffect, useState } from "react";
import { handleUploadFile, updateUserAPI } from "../../services/apiService";

const ViewDetailUser = (props) => {
    const {
        detailUser,
        setDetailUser,
        isDetailOpen,
        setIsDetailOpen,
        loadUser,
    } = props;

    const [fullName, setFullName] = useState("");
    const [id, setID] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    useEffect(() => {
        if (detailUser != null) {
            setFullName(detailUser.fullName);
            setID(detailUser._id);
            setPhone(detailUser.phone);
            setEmail(detailUser.email);
            setAvatar(detailUser.avatar);
        }
    }, [detailUser]);

    const resetAndCloseDetail = () => {
        setDetailUser(null);
        setIsDetailOpen(false);
        setAvatar("");
        setFullName("");
        setID("");
        setPhone("");
        setEmail("");
    };

    // xu ly file preview avatar

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleOnchangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleUpdateUserAvatar = async () => {
        const resUploadFile = await handleUploadFile(selectedFile, "avatar");
        if (resUploadFile.data) {
            // success
            const newAvatar = resUploadFile.data.fileUploaded;

            const resUpdateAvatar = await updateUserAPI(
                id,
                fullName,
                phone,
                newAvatar
            );
            if (resUpdateAvatar.data) {
                notification.success({
                    message: "Update User Avatar",
                    description: "Cập nhật avatar thành công",
                });
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);

                await loadUser();
            } else {
                notification.error({
                    message: "Error Upload File",
                    description: JSON.stringify(resUpdateAvatar.message),
                });
            }
        } else {
            notification.error({
                message: "Error Upload File",
                description: JSON.stringify(resUploadFile.message),
            });
        }
    };
    return (
        <Drawer
            width={"40vw"}
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
            <br />
            <div
                style={{
                    marginTop: "10px",
                    height: "100px",
                    width: "150px",
                }}
            >
                <img
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                    }}
                    src={`http://localhost:8080/images/avatar/${avatar}`}
                />
            </div>
            <div>
                <label
                    htmlFor="btnUpload"
                    style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Upload Avatar
                </label>
                <input
                    type="file"
                    hidden
                    id="btnUpload"
                    onChange={(event) => handleOnchangeFile(event)}
                />
            </div>
            {preview && (
                <>
                    <div
                        style={{
                            marginTop: "10px",
                            height: "100px",
                            marginBottom: "10px",
                            width: "150px",
                        }}
                    >
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                            }}
                            src={preview}
                        />
                    </div>
                    <Button
                        type="primary"
                        onClick={() => handleUpdateUserAvatar()}
                    >
                        Save
                    </Button>
                </>
            )}
        </Drawer>
    );
};
export default ViewDetailUser;
