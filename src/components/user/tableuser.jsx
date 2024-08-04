import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import ModalUpdateUser from "./modalUpdateUser";

function TableUser({ dataUsers }) {
    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
            render: (_, record) => {
                return <a href="#">{record._id}</a>;
            },
        },
        {
            title: "FullName",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        style={{ cursor: "pointer", color: "orange" }}
                    />
                    <DeleteOutlined
                        style={{ cursor: "pointer", color: "red" }}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} />
            <ModalUpdateUser />
        </>
    );
}

export default TableUser;
