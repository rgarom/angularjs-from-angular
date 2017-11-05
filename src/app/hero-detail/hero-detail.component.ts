export const heroDetail = {
  bindings: {
    hero: '<',
    deleted: '&'
  },
  template: `
    <h2>{{$ctrl.hero}} details!</h2>
    <button ng-click="$ctrl.onDelete()">Delete</button>
  `,
  controller: function() {
    this.onDelete = () => {
      this.deleted(this.hero);
    };
  }
};
