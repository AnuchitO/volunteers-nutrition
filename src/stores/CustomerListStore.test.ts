
// describe('CustomerListStore', () => {
//   describe('getCustomerListCSV', () => {
//     it('return correct csv content', () => {
//       let customerListStore = new CustomerListStore();
//
//       customerListStore.list = [
//         {
//           "_id":{"$oid":"57754404690c9d0003316b5c"},
//           "name":"doraemon",
//           "lastname":"fujio",
//           "age":"100",
//           "sex":"male"
//         },
//         {
//           "_id":{"$oid":"57754404690c9d0003316b5d"},
//           "name":"roofimon",
//           "lastname":"pan",
//           "age":"41",
//           "sex":"male"
//         },
//         {
//           "_id":{"$oid":"57754404690c9d0003316b5e"},
//           "name":"pallat",
//           "lastname":"an",
//           "age":"29",
//           "sex":"male"
//         }
//       ];
//
//       let expectedContent = "data:text/csv;charset=utf-8,name,lastname,age,sex\n" +
//         "doraemon,fujio,100,male\n" +
//         "roofimon,pan,41,male\n" +
//         "pallat,an,29,male";
//
//       expect(customerListStore.getCustomerListCSV()).toBe(expectedContent);
//     });
//   });
// });

