export interface ApiResponse {
	status: String,
	message: String,
	auth?: Boolean,
	loggedIn?:Boolean,
	code?:String
}