import React from "react";
import '../Styles/form.css'

let date = new Date().toDateString()

const Form = () =>{
    return(
        <>
           <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                        <th>Course</th>
                        <th>Session</th>
                        <th>Date of Birth</th>
                        <th>Mobile</th>
                        <th>Email Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sohan Kumar</td>
                        <td>Mohan Kumar</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>2020-2023</td>
                        <td>{date}</td>
                        <td>9135102010</td>
                        <td>test@gmail.com</td>
                        <td><button>Active</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sohan Kumar</td>
                        <td>Mohan Kumar</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>2020-2023</td>
                        <td>{date}</td>
                        <td>9135102010</td>
                        <td>test@gmail.com</td>
                        <td><button>Active</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sohan Kumar</td>
                        <td>Mohan Kumar</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>2020-2023</td>
                        <td>{date}</td>
                        <td>9135102010</td>
                        <td>test@gmail.com</td>
                        <td><button>Active</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sohan Kumar</td>
                        <td>Mohan Kumar</td>
                        <td>Test</td>
                        <td>BCA</td>
                        <td>2020-2023</td>
                        <td>{date}</td>
                        <td>9135102010</td>
                        <td>test@gmail.com</td>
                        <td><button>Active</button></td>
                    </tr>
                </tbody>
           </table>
        </>
    )
}

export default Form