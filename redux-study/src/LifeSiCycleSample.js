import React,{Component} from "react";
class LifeCycleSample extends Component{
    state={
        number:0,
        color:null,
    }
    myRef=null;
    constructor(props){
        super(props);
        console.log('constructor');
    }
    // props로 가져오는 값을 state에 동기화시키는 용도 컴포넌트가 **마운트,업데이트될때 호출
    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps.color!==prevState.color){
            return {color:nextProps.color}
        }
        return null;
        
    }
    // /첫 렌더링을 마친후 실행 비동기작업할때 사용
    componentDidMount(){
        console.log("componentDidMount");
    }
    // props와 state를 변경했을 시 리렌더링을 시작할지 결정하는 메소드,
    //  반드시 리턴값은 true or false(기본값은 항상 true,false를 반환시 업데이트 중지),
    // 성능 최적화할때 사용
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps,nextState);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않음.
        return nextState.number%10!==4;
    }
    // 컴포넌트를 dom에서 제거할때
    componentWillUnmount(){
        console.log("componentWillUnMount");
    }
    handleClick=()=>{
        this.setState({
            number:this.state.number+1
        });
    }
    // 렌더 될 결과가 브라우저에 반영되기 전에 호출, 업데이트하기 직전의 값을 참고할일있을때 활용(ex) 스크롤바 위치)
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color!==prevState.color){
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componetDidUpdate",prevProps,prevState);
        if(snapshot){
            console.log("업데이트 직전의 색상:",snapshot);
        }
    }
    render(){
        console.log("render");
        const style={
            color:this.props.color
        };
        return(
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}
export default LifeCycleSample;