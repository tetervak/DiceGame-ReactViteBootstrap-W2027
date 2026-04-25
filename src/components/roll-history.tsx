import {useHistory} from "../hooks/use-history.ts";
import {Button, Table} from "react-bootstrap";
import {XLg} from "react-bootstrap-icons";

export function RollHistory() {

    const {historyData, clearHistory} = useHistory();

    if (historyData.items.length === 0) {
        return null;
    }

    return (
        <>
            <h2 className="mt-4 mb-3">Roll History</h2>
            <Table striped bordered className="w-auto text-center">
                <thead>
                <tr className="table-primary">
                    <th>Count</th>
                    <th>Dice Values</th>
                    <th>Total</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {historyData.items.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.rollData.values.join(' + ')}</td>
                        <td>{item.rollData.total}</td>
                        <td>{new Date(item.timestamp).toLocaleString('en-CA')}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button onClick={clearHistory} variant="outline-danger ms-3">
                Clear History<XLg className="ms-2"/>
            </Button>
        </>
    )
}