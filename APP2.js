//import axios from "axios";

//let url = "http://52.10.102.239/tickets/";
function Table() {
    return (
        <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Actions</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <button class="btn btn-primary me-md-1" type="button">Button</button> <button class="btn btn-primary" type="button">Button</button>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td></td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td></td>
        </tr>
        </tbody>
    </table>
    );
}

export default Table;