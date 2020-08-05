/* 
	生命周期的三个阶段（旧）————主要以这个为主
			1.	初始化阶段: 由ReactDOM.render()触发---初次渲染
						* constructor()
						* componentWillMount()
						* render()
						* componentDidMount()
			2.	更新阶段: 由组件内部this.setSate()或父组件重新render触发
						* shouldComponentUpdate()
						* componentWillUpdate()
						* render()
						* componentDidUpdate()
			3.	卸载组件: 由ReactDOM.unmountComponentAtNode(containerDOM) 或 隐藏子组件触发
						* componentWillUnmount()

	2)生命周期的三个阶段（新）———— 了解
					a.	初始化阶段:  由ReactDOM.render()触发
								* constructor()
								* 【static getDerivedStateFromProps()】 
								* render()
								* componentDidMount()
					b.	更新阶段 由组件内部this.setSate()或父组件重新render触发
								* 【static getDerivedStateFromProps()】
								* shouldComponentUpdate()
								* render()
								* getSnapshotBeforeUpdate()
								* componentDidUpdate()
					c.	移除组件:  由ReactDOM.unmountComponentAtNode(containerDom)触发
								* componentWillUnmount()

	*/