import './App.css';
import LeftBox from './components/LeftBox';
import RightBox from './components/RightBox';

//1. 왼쪽에는 연락처를 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇 개 있는지 볼 수 있다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className='title'>phone book</h1>
      <div className='phonebook-container'>
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
}

export default App;
