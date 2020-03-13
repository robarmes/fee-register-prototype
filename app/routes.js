const express = require('express');
const router  = express.Router();

router.use('/', require('./routes/jui'));
router.use('/', require('./routes/questions'));

router.get('/', function (req, res) {
	req.session.destroy();
	res.render('index');
})

router.get('/prototype-admin/view-the-data', function(req, res)
{
	res.render('prototype-admin/view-data', { data: JSON.stringify( req.session, null, 2) } )
});

module.exports = router;
