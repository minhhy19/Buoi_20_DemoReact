import DemoClassComponent from './DemoComponent/DemoClassComponent';
import DemoFunctionComponent from './DemoComponent/DemoFunctionComponent';
import BaiTapDungLayout from './BaiTapDungLayout/BaiTapDungLayout';
import DataBinding from './DataBinding/DataBinding';
import HandlingEvent from './HandlingEvent/HandlingEvent';
import EventHandleRCC from './EventHandle/EventHandleRCC';
import LoginForm from './EventHandle/LoginForm';
import StyleComponent from './StyleComponent/StyleComponent';
import BaiTapChonXe from './StateDemo/BaiTapChonXe/BaiTapChonXe';
import BaiTapTangGiamFont from './BaiTapTangGiamFont/BaiTapTangGiamFont';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import BaiTapQLSP from './Props/BaiTapQLSP/BaiTapQLSP';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import DemoPropsChildren from './Props/DemoPropsChildren/DemoPropsChildren';
import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapQuanLyNguoiDung from './DemoRedux/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
import AxiosDemo from './AxiosDemo/AxiosDemo';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import { Switch } from 'react-router-dom';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import Detail from './pages/Detail/Detail';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import HookUseEffect from './pages/HookReact/HookUseEffect/HookUseEffect';
import ParentComponent from './pages/HookReact/HookUseCallBack/ParentComponent';
import HookUseMemo from './pages/HookReact/HookUseMemo/HookUseMemo';
import HookUseRef from './pages/HookReact/HookUseRef/HookUseRef';
import HookRedux from './pages/HookReact/HookRedux/HookRedux';
import ToDoList from './pages/HookReact/ToDoList/ToDoList';
import DemoHOCModal from './pages/HOC/DemoHOCModal/DemoHOCModal';
import ModalHOC from './pages/HOC/DemoHOCModal/ModalHOC';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        {/* <DemoClassComponent /> */}
        {/* <DemoFunctionComponent /> */}
        {/* <BaiTapDungLayout /> */}
        {/* <DataBinding /> */}
        {/* <HandlingEvent /> */}
        {/* <EventHandleRCC /> */}
        {/* <LoginForm /> */}
        {/* <StyleComponent /> */}
        {/* <p className='pColorRed'>Hello Cybersoft</p> */}
        {/* <BaiTapChonXe /> */}
        {/* <BaiTapTangGiamFont /> */}
        {/* <RenderWithMap /> */}
        {/* <DemoProps /> */}
        {/* <BaiTapQLSP /> */}
        {/* <BaiTapXemChiTiet /> */}
        {/* <ExerciseCarStore /> */}
        {/* <DemoPropsChildren /> */}
        {/* <BaiTapChonXeRedux /> */}
        {/* <BaiTapGameXucXac /> */}
        {/* <BaiTapQuanLyNguoiDung /> */}
        {/* <ReactLifeCycle /> */}
        {/* <AxiosDemo /> */}
      {/* </div> */}
      <HeaderHome />
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/detail/:id'} component={Detail} />
        <Route exact path={'/admin'} component={AdminIndex} />
        <Route exact path={'/hookusestate'} component={HookUseState} />
        <Route exact path={'/hookuseeffect'} component={HookUseEffect} />
        <Route exact path={'/hookusecallback'} component={ParentComponent} />
        <Route exact path={'/hookusememo'} component={HookUseMemo} />
        <Route exact path={'/hookuseref'} component={HookUseRef} />
        <Route exact path={'/hookredux'} component={HookRedux} />
        <Route exact path={'/todolist'} component={ToDoList} />
        <Route exact path={'/demohocmodal'} component={DemoHOCModal} />
        <Route exact path={'/'} component={Home} />
      </Switch>

      <ModalHOC />
    </BrowserRouter>
  );
}

export default App;
