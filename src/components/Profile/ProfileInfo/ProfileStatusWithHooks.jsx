import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

	// console.log(props);

	// state = {
	// 	editMode: false
	// }

	// activateEditMode = () => {
	// 	this.setState({
	// 		editMode: true,
	// 		status: this.props.status
	// 	})
	// }

	// deactivateEditMode = () => {
	// 	this.setState({
	// 		editMode: false
	// 	});
	// 	this.props.updateStatus(this.state.status);
	// }

	// onStatusChange = (e) => {
	// 	this.setState({
	// 		status: e.currentTarget.value
	// 	});
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.status !== this.props.status) {
	// 		this.setState ({
	// 			status: this.props.status
	// 		});
	// 	}
	// }

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div>
			{!editMode &&
				<div onDoubleClick={activateEditMode}>
					<span>{props.status || "-------"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text" value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;