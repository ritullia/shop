import BackContext from '../../Contexts/BackContext';
import { useContext } from 'react';

function Message() {
    const { message } = useContext(BackContext);

    if (!message.show) {
        return null;
    }

    return (
        <div className=" message-bin">
            <div className={' alert alert-' + message.type} role="alert">
                {message.text}
            </div>
        </div>
    );
}

export default Message;
