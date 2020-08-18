import React from 'react';
import './styles/finderBox.scss';
import { FinderContent } from 'data/Content';

interface Props {
    content: FinderContent;
    foundSituations: string[];
    onOpenGame: () => void;
}

const FinderBox = (props: Props) => {
    const disabled = props.foundSituations.length < props.content.situations.length;
    return (
        <div className="finder-box">
            {`${props.content.instruction} (${props.foundSituations.length}/${props.content.situations.length})`} 
            <button className="green button" disabled={disabled} onClick={props.onOpenGame}>
                Next
                {/* {props.tryAgainText} */}
            </button>
        </div>
    )
}

export default FinderBox;