import Serializer from './application';

export default Serializer.extend({
    include: ['domainInvitation', 'playerInvitation']
});