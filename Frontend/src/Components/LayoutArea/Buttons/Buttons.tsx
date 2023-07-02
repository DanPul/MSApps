import NextButton from "../../ButtonsArea/NextButton/NextButton";
import PrevButton from "../../ButtonsArea/PrevButton/PrevButton";
import SelectButton from "../../ButtonsArea/SelectButton/SelectButton";
import "./Buttons.css";

function Buttons(): JSX.Element {
    return (
        <div className="Buttons">
			
            <PrevButton />
            <SelectButton />
            <NextButton />
            
        </div>
    );
}

export default Buttons;
