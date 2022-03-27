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
import { BrowserRouter, Router } from 'react-router-dom';
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
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import DemoAntd from './pages/DemoAntd/DemoAntd';
import { AdminTemplate } from './templates/AdminTemplate';
import { history } from './util/settting';
import Profile from './pages/Profile/Profile';
import HomeMobile from './pages/Home/HomeMobile';

function App() {
  return (
    <Router history={history}>
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
      {/* <HeaderHome /> */}
      <Switch>
        <HomeTemplate path={'/home'} component={Home} mobileComponent={HomeMobile} />
        <HomeTemplate path={'/contact'} component={Contact} />
        <UserTemplate path={'/login'} component={Login} />
        <UserTemplate path={'/register'} component={Register} />
        <HomeTemplate path={'/about'} component={About} />
        <HomeTemplate path={'/detail/:id'} component={Detail} />
        <HomeTemplate path={'/admin'} component={AdminIndex} />
        <HomeTemplate path={'/hookusestate'} component={HookUseState} />
        <HomeTemplate path={'/hookuseeffect'} component={HookUseEffect} />
        <HomeTemplate path={'/hookusecallback'} component={ParentComponent} />
        <HomeTemplate path={'/hookusememo'} component={HookUseMemo} />
        <HomeTemplate path={'/hookuseref'} component={HookUseRef} />
        <HomeTemplate path={'/hookredux'} component={HookRedux} />
        <HomeTemplate path={'/todolist'} component={ToDoList} />
        <HomeTemplate path={'/profile'} component={Profile} />
        <AdminTemplate path={'/demohocmodal'} component={DemoHOCModal} />
        
        <HomeTemplate path={'/'} component={Home} mobileComponent={HomeMobile} />
      </Switch>

      <ModalHOC />
    </Router>
  );
}

export default App;
