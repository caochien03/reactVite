import TableUser from "../components/user/tableuser";
import UserForm from "../components/user/userform";

function UserPage() {
    return (
        <div>
            <div>
                <UserForm />
                <TableUser />
            </div>
        </div>
    );
}

export default UserPage;
