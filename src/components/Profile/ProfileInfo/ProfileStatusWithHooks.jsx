import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

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
					<b>Status: </b>
					<span>{props.status || "-------"}</span>
				</div>
			}
			{editMode &&
				<div>
					<b>Status: </b>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text" value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;