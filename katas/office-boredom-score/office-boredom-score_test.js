describe('office boredom score', function() {

    it('should return appropriate boredom score', function() {
        expect(boredom({tim: 'change', jim: 'accounts',
            randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
            laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
            mr: 'finance' })).toEqual('kill me now');
        expect(boredom({ tim: 'IS', jim: 'finance',
            randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
            katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
            alex: 'regulation', john: 'accounts', mr: 'canteen' })).toEqual('i can handle this');
        expect(boredom({ tim: 'accounts', jim: 'accounts',
            randy: 'pissing about', sandy: 'finance', andy: 'change',
            katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
            john: 'retail', mr: 'pissing about' })).toEqual('party time!!');
    });
});
