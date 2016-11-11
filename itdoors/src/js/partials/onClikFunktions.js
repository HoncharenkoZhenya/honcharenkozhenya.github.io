function onClickSimple() {
	document.getElementById("contractNumber").className = "form-group none";
	document.getElementById("contractDate").className = "form-group none";
	document.getElementById("contractFile").className = "form-group none";
	document.getElementById("offerSum").className = "form-group none";
	document.getElementById("offerFile").className = "form-group none";
}

function onClickContract() {
	document.getElementById("contractNumber").className =
		document.getElementById("contractNumber").className.replace('none','');
	document.getElementById("contractDate").className =
		document.getElementById("contractDate").className.replace('none','');
	document.getElementById("contractFile").className =
		document.getElementById("contractFile").className.replace('none','');

	document.getElementById("offerSum").className = "form-group none";
	document.getElementById("offerFile").className = "form-group none";
}

function onClickOffer() {
	document.getElementById("offerSum").className =
		document.getElementById("offerSum").className.replace('none','');
	document.getElementById("offerFile").className =
		document.getElementById("offerFile").className.replace('none','');

	document.getElementById("contractNumber").className = "form-group none";
	document.getElementById("contractDate").className = "form-group none";
	document.getElementById("contractFile").className = "form-group none";
}
function onClickSubmit() {
	if (document.getElementById("activiity_id").value == 3) {
		var strJSON = {
			name: document.getElementById("name").value,
			phone_id: +document.getElementById("phone_id").value,
			activiity_id: +document.getElementById("activiity_id").value,
			offer: {
		   sum: +document.getElementById("double").value,
		   file_id: +document.getElementById("offer_file").value
		  }
		}
	} else if (document.getElementById("activiity_id").value == 4) {
		var strJSON = {
			name: document.getElementById("name").value,
			phone_id: +document.getElementById("phone_id").value,
			activiity_id: +document.getElementById("activiity_id").value,
			contract: {
		    number: document.getElementById("contract_number").value,
		    date: document.getElementById("date").value,
		    file_id: +document.getElementById("contract_file").value
		  }
		}
	} else {
		var strJSON = {
			name: document.getElementById("name").value,
			phone_id: +document.getElementById("phone_id").value,
			activiity_id: +document.getElementById("activiity_id").value
		}
	}
	alert(JSON.stringify(strJSON));
}