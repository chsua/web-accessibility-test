import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [eventMessage, setEventMessage] = useState(`초기값 ${number}`);

  const handleNumberChange = (number) => {
    setNumber(number);
    setEventMessage(`현재값 ${number}`);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => handleNumberChange(Number(e.target.value))}
        // aria-label={eventMessage}
        aria-live="polite"
      />
      <button
        type="button"
        aria-label="감소 버튼"
        onClick={() => handleNumberChange(number - 1)}
      >
        -
      </button>
      <button
        type="button"
        aria-label="추가 버튼"
        onClick={() => handleNumberChange(number + 1)}
      >
        +
      </button>
      <span role="contentinfo" aria-label="작동법 설명">
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </span>
      <p role="contentinfo" aria-label="작동법 설명">
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </p>
      <div role="presentation" aria-label="작동법 설명" tabIndex={0}>
        숫자를 직접 입력하거나 버튼으로 올리고 내릴 수 있습니다.
      </div>
    </div>
  );
}
