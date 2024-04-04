import styles from "./CartCheckBox.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
export function CartCheckBox() {
	return (
		<>
			<div className={styles.checkboxContainer}>
					<h2>Ochrona danych</h2>
				<div className={styles.inputContainer}>
					<input className={styles.checkbox} type="checkbox" id="dataPrivacy" name="dataPrivacy" />
					<label htmlFor="dataPrivacy">
                        Akceptuję Regulamin sklepu i zapoznałem się z Polityką Prywatności
						Przed wysłaniem nam swoich danych, koniecznie zapoznaj się z
						Polityką Prywatności, w której znajdziesz informacje o
						administratorze Twoich danych osobowych, Twoich prawach, w jakim
						celu przetwarzane są Twoje dane, przez jaki okres, kim są odbiorcy
						Twoich danych oraz wszelkie inne informacje, które dotyczą ochrony
						Twoich danych osobowych.
					</label>
				</div>
					<h2>Newsletter</h2>
				<div className={styles.inputContainer}>
					<input className={styles.checkbox} type="checkbox" id="Newsletter" name="Newsletter" />
					<label htmlFor="Newsletter">
						Tak, chcę otrzymywać wiadomości w newsletterze o nowościach,
						zniżkach i kodach rabatowych. Akceptuję Regulamin Newslettera i
						zapoznałem się z Polityką Prywatności.
					</label>
				</div>
				<FullWidthButton>PRZEJDŹ DALEJ</FullWidthButton>
			</div>
		</>
	);
}