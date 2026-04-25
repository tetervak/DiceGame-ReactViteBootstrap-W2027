import {useHistory} from "../hooks/use-history.ts";
import {Button} from "react-bootstrap";
import {XLg} from "react-bootstrap-icons";

export function RollHistory(){

    const {historyData, clearHistory} = useHistory();

    if(historyData.items.length === 0){
        return null;
    }

    return(
        <>
            <h2 className="mt-4 mb-3">Roll History</h2>
            <ol>
                {historyData.items.map(item => (
                    <li key={item.id}>{item.rollData.values.join(' + ')}&nbsp;=&nbsp;{item.rollData.total}</li>
                ))}
            </ol>
            <Button onClick={clearHistory} variant="outline-danger ms-3">Clear History<XLg className="ms-2"/></Button>
        </>
    )
}