const express = require('express')
const router = express.Router()
const adminRoutes = require('./admin/routes.js')

//rutas de la app
router.use('/admin', adminRoutes )
//router.use('/bridge', bridgeRoutes)
//router.use('/integrations', integrationsRoutes)
//router.use('/database', databaseRoutes)



module.exports = router