import { DeleteOutlined } from "@ant-design/icons";
import { notification, Popconfirm } from "antd";
import { deleteUserAPI } from "../../services/apiService";

const DeleteUser = (props) => {
    const { loadUser, dataDelete } = props;
    const confirmDelete = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Tạo mới user thành công",
            });
            await loadUser();
        } else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message),
            });
        }
    };

    return (
        <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirmDelete(dataDelete._id)}
            okText="Yes"
            cancelText="No"
        >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </Popconfirm>
    );
};
export default DeleteUser;
