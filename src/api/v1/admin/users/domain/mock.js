exports.table = 'rbac_users'

exports.columnsAll = [
	'id',
	'roleId',
	'name AS Nombres',
	'lastname AS Apellidos',
	'mobile AS Celular',
	'email AS Correo',
	'profile AS Perfil',
	'city AS Ciudad',
	'country_id',
]

exports.sqlAll = `SELECT 
	U.id,
	U.name AS Nombres,
	U.lastname AS Apellidos,
	U.mobile AS Celular,
	U.email AS Correo,
	U.profile AS Perfil,
	U.city AS Ciudad,
	R.name AS Rol,
	C.name AS Pais
	FROM ${this.table} AS U
	LEFT JOIN rbac_role AS R ON R.id = U.roleId
	LEFT JOIN gbl_countries AS C ON C.id = U.country_id
`

exports.columns = [
	'id',
	'roleId',
	'name',
	'lastname',
	'mobile',
	'email',
	'password',
	'registered_at',
	'last_login',
	'profile',
	'city',
	'token',
	'country_id',
]

exports.data = {
	id: 0,
	roleId: 0,
	name: '',
	lastname: '',
	mobile: '',
	email: '',
	password: '',
	registered_at: '',
	last_login: '',
	profile: '',
	city : '',
	token : '',
	country_id : 0,
}