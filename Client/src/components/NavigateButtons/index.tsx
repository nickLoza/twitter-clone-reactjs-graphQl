import { useState } from "react";

type NavigateButtonsType = {
	buttons: String[]
}


function NavigateButtons({buttons}:NavigateButtonsType) {

	const [ selectedButton, setSelectedButton ] = useState<number>(0);

	function handleOnClick(index: number) {
    	setSelectedButton(index);
  	}

	return (
		<div className="text-sm px-0 md:text-base flex justify-around md:px-[25px] mb-8 text-medium font-semibold border-gray-600 border-b-[1px]">
			{buttons.map((item,i)=>(
				<button key={i} className={`px-2 pb-3 ${i === selectedButton ? "text-white border-[#1D9BF0] border-b-4": "text-gray-600"}`}
				onClick={() => handleOnClick(i)}>{item}</button>
			))}	
      	</div>
	)
}

export default NavigateButtons