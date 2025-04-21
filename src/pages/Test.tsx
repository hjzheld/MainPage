
const App: React.FC = () => {
  // 중복 로그인 처리
  const saveBtn = async () => {
    try {
      // 중복 로그인 확인 API 호출
      await fetch("https://trade.tryex.xyz/session/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          session_id: '123',
          user_id: '555',
          total_pakage: 10,
          end_date: "2025-04-15"
        })
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };


    // 중복 로그인 처리
  const socketBtn = async () => {
    try {
      // 중복 로그인 확인 API 호출
      await fetch("https://trade.tryex.xyz/session/duplicate-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          session_id: '123',
          user_id: '555',
          total_pakage: 10,
          end_date: "2025-04-15"
        })
      });

    } catch (error) {
      console.error("Error:", error);
    }
};

  return (
    <div>
      <button onClick={saveBtn}>로그인 처리</button>
      <button onClick={socketBtn}>중복 로그인 처리</button>
    </div>
  );
};

export default App;
