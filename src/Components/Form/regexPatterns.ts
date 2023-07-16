const PasswordPattern =
	/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;

const PersianNumberPattern = /[۰۱۲۳۴۵۶۷۸۹]+/;

const OnlyPersianCharactersPattern =
	/^[كي آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/;

const OnlyEnglishCharactersPattern = /^[A-Za-z]+$/;

const CellphonePattern = /^09[0-9]{9}$/;

const NationalCodePattern = /^[0-9]{10}$/;

const CertificateSeriPattern = /^[0-9]{5,6}$/;

const CertificateSeriCharPattern =
	/^[كيآابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{1,6}$/;

const CertificateNoPattern = /^[0-9]{1,10}$/;

const NumericPattern = /^([0-9])*$/;

const UserNamePattern = /^([-]|[_]|[a-zA-Z0-9]|[.]|[@]|[$]|[%]|[!]){5,40}$/;

const PostCodePattern = /^([1-9][0-9]{9})$/g;

const CertificateSeriNoPattern = /^[0-9]{0,2}$/;

const PhonePattern = /^0[1-9][0-9]{9}$/;

const EmailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/;

const SocialNetworkPattern = /^[a-zA-Z0-9_.@-]+$/;

const FaxPattern = /^0[1-9][0-9]{9}$/;

const EnglishNumberPattern = /^[0-9]+$/;

const ValidNamePattern = /^[كي آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیA-Za-z]+$/;

const ValidCharactersPattern =
	/^[كي آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیA-Za-z0-9]+$/;

const ValidAddressPattern =
	/^[كي آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیA-Za-z0-9 ._-]+$/;

const PUBLIC_PATTERN =
	/^([a-zA-Z]|[ء-ٞ]|[پ]|[چ]|[ژ]|[ک]|[گ]|[ی]|[ۀ]|[?]|[ ]|[-]|[_]|[0-9]|[!]|[@]|[#]|[$]|[%]|[^]|[&]|[*]|[(]|[)]|[+]|[=]|[.]|[,]|[<]|[>]|[,]|[/]|[?]|[\\]|[|]|[{]|[}]|[[]|[]]|[٠]|[١]|[٢]|[٣]|[٤]|[٥]|[٦]|[٧]|[٨]|[٩]|[۰]|[۱]|[۲]|[۳]|[۴]|[۵]|[۶]|[۷]|[۸]|[۹]|[\r]|[\n]|[\t])*$/g;

const ValidUserNameCharacters =
	/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.@-/;

export default {
	PasswordPattern,
	PersianNumberPattern,
	OnlyPersianCharactersPattern,
	OnlyEnglishCharactersPattern,
	CellphonePattern,
	NationalCodePattern,
	CertificateSeriPattern,
	CertificateSeriCharPattern,
	CertificateNoPattern,
	NumericPattern,
	UserNamePattern,
	PostCodePattern,
	CertificateSeriNoPattern,
	PhonePattern,
	EmailPattern,
	SocialNetworkPattern,
	FaxPattern,
	EnglishNumberPattern,
	ValidNamePattern,
	ValidCharactersPattern,
	ValidAddressPattern,
	PUBLIC_PATTERN,
	ValidUserNameCharacters,
};
