import React, {useState} from 'react';


function App() {
  const [value, setValue] = useState(""); 
  // 처음 String형태 였으므로 이후에도 계속 String 이어야 오류가 안 남

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // 어떤 event를 받는지 알 수 있음
    const {currentTarget: {value},} = e;
    setValue(value);
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type = "text" 
          placeholder='username'
          onChange={onChange}
          value = {value}
          />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;

// required 여부 정하기 , 볼덜컬러가 있으면 사용 없으면 백그라운드 컬러 사용 