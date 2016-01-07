var AppIDs = {
	TF2: 440,
	CSGO: 730,
	Steam: 753
};

var Quality = {
	Normal: 0,
	Genuine: 1,
	UNUSED_RARITY2: 2,
	Vintage: 3,
	UNUSED_RARITY3: 4,
	Unusual: 5,
	Unique: 6,
	Community: 7,
	Valve: 8,
	SelfMade: 9,
	UNUSED_CUSTOMIZED: 10,
	Strange: 11,
	Haunted: 13,
	UNUSED_COMPLETED: 12,
	Collectors: 14
};

//Unlike Quality, Unusual effects have little logic in order of numbery-thingies. Be careful with using index to look up stuff.
var UnusualEffects = {
	"Particle 1": 1,
	"Flying Bits": 2,
	"Nemesis Burst": 3,
	"Community Sparkle": 4,
	"Holy Glow": 5,
	"Green Confetti": 6,
	"Purple Confetti": 7,
	"Haunted Ghosts": 8,
	"Green Energy": 9,
	"Purple Energy": 10,
	"Circling TF Logo": 11,
	"Massed Flies": 12,
	"Burning Flames": 13,
	"Scorching Flames": 14,
	"Searing Plasma": 15,
	"Vivid Plasma": 16,
	"Sunbeams": 17,
	"Circling Peace Sign": 18,
	"Circling Heart": 19,
	"Map Stamps": 20,
	"Genteel Smoke": 28,
	"Stormy Storm": 29,
	"Blizzardy Storm": 30,
	"Nuts n' Bolts": 31,
	"Orbiting Planets": 32,
	"Orbiting Fire": 33,
	"Bubbling": 34,
	"Smoking": 35,
	"Steaming": 36,
	"Flaming Lantern": 37,
	"Cloudy Moon": 38,
	"Cauldron Bubbles": 39,
	"Eerie Orbiting Fire": 40,
	"Knifestorm": 43,
	"Misty Skull": 44,
	"Harvest Moon": 45,
	"It's A Secret To Everybody": 46,
	"Stormy 13th Hour": 47,
	"Attrib_Particle55": 55,
	"Kill-a-Watt": 56,
	"Terror-Watt": 57,
	"Cloud 9": 58,
	"Aces High": 59,
	"Dead Presidents": 60,
	"Miami Nights": 61,
	"Disco Beat Down": 62,
	"Phosphorous": 63,
	"Sulphurous": 64,
	"Memory Leak": 65,
	"Overclocked": 66,
	"Electrostatic": 67,
	"Power Surge": 68,
	"Anti-Freeze": 69,
	"Time Warp": 70,
	"Green Black Hole": 71,
	"Roboactive": 72,
	"Arcana": 73,
	"Spellbound": 74,
	"Chiroptera Venenata": 75,
	"Poisoned Shadows": 76,
	"Something Burning This Way Comes": 77,
	"Hellfire": 78,
	"Darkblaze": 79,
	"Demonflame": 80,
	"Bonzo The All-Gnawing": 81,
	"Amaranthine": 82,
	"Stare From Beyond": 83,
	"The Ooze": 84,
	"Ghastly Ghosts Jr": 85,
	"Haunted Phantasm Jr": 86,
	"Frostbite": 87,
	"Molten Mallard": 88,
	"Morning Glory": 89,
	"Death at Dusk": 90,
	"Abduction": 91,
	"Atomic": 92,
	"Subatomic": 93,
	"Electric Hat Protector": 94,
	"Magnetic Hat Protector": 95,
	"Voltaic Hat Protector": 96,
	"Galactic Codex": 97,
	"Ancient Codex": 98,
	"Nebula": 99,
	"Death by Disco": 100,
	"It's a mystery to everyone": 101,
	"It's a puzzle to me ": 102,
	"Ether Trail": 103,
	"Nether Trail": 104,
	"Ancient Eldritch": 105,
	"Eldritch Flame": 106,
	"Hot": 701,
	"Isotope": 702,
	"Cool": 702,
	"Energy Orb": 704,
	"Showstopper": 3001,
	//"Showstopper": 3002, //yes it shows up twice no its not a typo
	"Holy Grail": 3003,
	"'72": 3004, //again, not a typo, '72 is the effect
	"Fountain of Delight": 3005,
	"Screaming Tiger": 3006,
	"Skill Gotten Gains": 3007,
	"Midnight Whirlwind": 3008,
	"Silver Cyclone": 3009,
	"Mega Strike": 3010,
	"Haunted Phantasm": 3011,
	"Ghastly Ghosts": 3012
};

enum ErrorCodes
{
	Invalid = 0;
	OK = 1;
	Fail = 2;
	NoConnection = 3;
	InvalidPassword = 5;
	LoggedInElsewhere = 6;
	InvalidProtocolVer = 7;
	InvalidParam = 8;
	FileNotFound = 9;
	Busy = 10;
	InvalidState = 11;
	InvalidName = 12;
	InvalidEmail = 13;
	DuplicateName = 14;
	AccessDenied = 15;
	Timeout = 16;
	Banned = 17;
	AccountNotFound = 18;
	InvalidSteamID = 19;
	ServiceUnavailable = 20;
	NotLoggedOn = 21;
	Pending = 22;
	EncryptionFailure = 23;
	InsufficientPrivilege = 24;
	LimitExceeded = 25;
	Revoked = 26;
	Expired = 27;
	AlreadyRedeemed = 28;
	DuplicateRequest = 29;
	AlreadyOwned = 30;
	IPNotFound = 31;
	PersistFailed = 32;
	LockingFailed = 33;
	LogonSessionReplaced = 34;
	ConnectFailed = 35;
	HandshakeFailed = 36;
	IOFailure = 37;
	RemoteDisconnect = 38;
	ShoppingCartNotFound = 39;
	Blocked = 40;
	Ignored = 41;
	NoMatch = 42;
	AccountDisabled = 43;
	ServiceReadOnly = 44;
	AccountNotFeatured = 45;
	AdministratorOK = 46;
	ContentVersion = 47;
	TryAnotherCM = 48;
	PasswordRequiredToKickSession = 49;
	AlreadyLoggedInElsewhere = 50;
	Suspended = 51;
	Cancelled = 52;
	DataCorruption = 53;
	DiskFull = 54;
	RemoteCallFailed = 55;
	PasswordUnset = 56;
	ExternalAccountUnlinked = 57;
	PSNTicketInvalid = 58;
	ExternalAccountAlreadyLinked = 59;
	RemoteFileConflict = 60;
	IllegalPassword = 61;
	SameAsPreviousValue = 62;
	AccountLogonDenied = 63;
	CannotUseOldPassword = 64;
	InvalidLoginAuthCode = 65;
	AccountLogonDeniedNoMail = 66;
	HardwareNotCapableOfIPT = 67;
	IPTInitError = 68;
	ParentalControlRestricted = 69;
	FacebookQueryError = 70;
	ExpiredLoginAuthCode = 71;
	IPLoginRestrictionFailed = 72;
	AccountLockedDown = 73;
	AccountLogonDeniedVerifiedEmailRequired = 74;
	NoMatchingURL = 75;
	BadResponse = 76;
	RequirePasswordReEntry = 77;
	ValueOutOfRange = 78;
	UnexpectedError = 79;
	Disabled = 80;
	InvalidCEGSubmission = 81;
	RestrictedDevice = 82;
	RegionLocked = 83;
	RateLimitExceeded = 84;
	AccountLoginDeniedNeedTwoFactor = 85;
	ItemDeleted = 86;
	AccountLoginDeniedThrottle = 87;
	TwoFactorCodeMismatch = 88;
	TwoFactorActivationCodeMismatch = 89;
	AccountAssociatedToMultiplePartners = 90;
	NotModified = 91;
	NoMobileDevice = 92;
	TimeNotSynced = 93;
	SMSCodeFailed = 94;
	AccountLimitExceeded = 95;
	AccountActivityLimitExceeded = 96;
	PhoneActivityLimitExceeded = 97;
	RefundToWallet = 98;
	EmailSendFailure = 99;
	NotSettled = 100;
	NeedCaptcha = 101;
};

module.exports = {
	Quality,
	UnusualEffects,
	AppIDs,
	ErrorCodes
};