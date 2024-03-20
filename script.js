//your JS code here. If required.
function saveFormData() {
			let data = {
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				phone: document.getElementById("phone").value
			};

			let forms = localStorage.getItem("forms");
			if (forms) {
				forms = JSON.parse(forms);
				forms.push(data);
			} else {
				forms = [data];
			}
			localStorage.setItem("forms", JSON.stringify(forms));
		}

		// Auto-fill form with previous data
		function autoFillForm() {
			let forms = localStorage.getItem("forms");
			if (forms) {
				forms = JSON.parse(forms);
				let lastForm = forms[forms.length - 1];
				document.getElementById("name").value = lastForm.name;
				document.getElementById("email").value = lastForm.email;
				document.getElementById("phone").value = lastForm.phone;
			}
		}
