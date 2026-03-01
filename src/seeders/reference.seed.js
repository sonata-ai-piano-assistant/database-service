require("dotenv").config()
const mongoose = require("mongoose")
const env = require("../config/env")
const db = require("../models")

async function seedReferences() {
  await mongoose.connect(env.database_uri)

  // Example reference document with sections
  const reference = await db.models.Reference.create(
    {
      name: "Für Elise - Beethoven",
      fileName: "fur-elise.mid",
      sections: {
        intro: [
          {
            note: 76,
            velocity: 120,
            time: 33
          },
          {
            note: 75,
            velocity: 120,
            time: 238
          },
          {
            note: 76,
            velocity: 120,
            time: 433
          },
          {
            note: 75,
            velocity: 120,
            time: 638
          },
          {
            note: 76,
            velocity: 120,
            time: 838
          },
          {
            note: 71,
            velocity: 120,
            time: 1033
          },
          {
            note: 74,
            velocity: 120,
            time: 1238
          },
          {
            note: 72,
            velocity: 120,
            time: 1438
          },
          {
            note: 69,
            velocity: 120,
            time: 1638
          },
          {
            note: 60,
            velocity: 120,
            time: 2238
          },
          {
            note: 64,
            velocity: 120,
            time: 2438
          },
          {
            note: 69,
            velocity: 120,
            time: 2633
          },
          {
            note: 71,
            velocity: 120,
            time: 2833
          },
          {
            note: 64,
            velocity: 120,
            time: 3433
          },
          {
            note: 68,
            velocity: 120,
            time: 3633
          },
          {
            note: 71,
            velocity: 120,
            time: 3838
          },
          {
            note: 72,
            velocity: 120,
            time: 4033
          },
          {
            note: 64,
            velocity: 120,
            time: 4633
          },
          {
            note: 76,
            velocity: 120,
            time: 4833
          },
          {
            note: 75,
            velocity: 120,
            time: 5038
          },
          {
            note: 76,
            velocity: 120,
            time: 5238
          },
          {
            note: 75,
            velocity: 120,
            time: 5438
          },
          {
            note: 76,
            velocity: 120,
            time: 5638
          },
          {
            note: 71,
            velocity: 120,
            time: 5833
          },
          {
            note: 74,
            velocity: 120,
            time: 6038
          },
          {
            note: 72,
            velocity: 120,
            time: 6233
          },
          {
            note: 69,
            velocity: 120,
            time: 6433
          },
          {
            note: 60,
            velocity: 120,
            time: 7038
          },
          {
            note: 64,
            velocity: 120,
            time: 7238
          },
          {
            note: 69,
            velocity: 120,
            time: 7438
          },
          {
            note: 71,
            velocity: 120,
            time: 7633
          },
          {
            note: 62,
            velocity: 120,
            time: 8238
          },
          {
            note: 72,
            velocity: 120,
            time: 8438
          },
          {
            note: 71,
            velocity: 120,
            time: 8638
          },
          {
            note: 69,
            velocity: 120,
            time: 8833
          },
          {
            note: 60,
            velocity: 120,
            time: 8833
          },
          {
            note: 76,
            velocity: 120,
            time: 9638
          },
          {
            note: 75,
            velocity: 120,
            time: 9841
          },
          {
            note: 76,
            velocity: 120,
            time: 10055
          },
          {
            note: 75,
            velocity: 120,
            time: 10272
          },
          {
            note: 76,
            velocity: 120,
            time: 10485
          },
          {
            note: 71,
            velocity: 120,
            time: 10703
          },
          {
            note: 74,
            velocity: 120,
            time: 10907
          },
          {
            note: 72,
            velocity: 120,
            time: 11111
          },
          {
            note: 69,
            velocity: 120,
            time: 11307
          },
          {
            note: 60,
            velocity: 120,
            time: 11911
          },
          {
            note: 64,
            velocity: 120,
            time: 12107
          },
          {
            note: 69,
            velocity: 120,
            time: 12307
          },
          {
            note: 71,
            velocity: 120,
            time: 12511
          },
          {
            note: 64,
            velocity: 120,
            time: 13111
          },
          {
            note: 68,
            velocity: 120,
            time: 13311
          },
          {
            note: 71,
            velocity: 120,
            time: 13511
          },
          {
            note: 72,
            velocity: 120,
            time: 13711
          },
          {
            note: 64,
            velocity: 120,
            time: 14311
          },
          {
            note: 76,
            velocity: 120,
            time: 14507
          },
          {
            note: 75,
            velocity: 120,
            time: 14707
          },
          {
            note: 76,
            velocity: 120,
            time: 14911
          },
          {
            note: 75,
            velocity: 120,
            time: 15111
          },
          {
            note: 76,
            velocity: 120,
            time: 15307
          },
          {
            note: 71,
            velocity: 120,
            time: 15511
          },
          {
            note: 74,
            velocity: 120,
            time: 15707
          },
          {
            note: 72,
            velocity: 120,
            time: 15911
          },
          {
            note: 69,
            velocity: 120,
            time: 16111
          },
          {
            note: 60,
            velocity: 120,
            time: 16707
          },
          {
            note: 64,
            velocity: 120,
            time: 16907
          },
          {
            note: 69,
            velocity: 120,
            time: 17107
          },
          {
            note: 71,
            velocity: 120,
            time: 17311
          },
          {
            note: 62,
            velocity: 120,
            time: 17911
          },
          {
            note: 72,
            velocity: 120,
            time: 18107
          },
          {
            note: 71,
            velocity: 120,
            time: 18307
          },
          {
            note: 69,
            velocity: 120,
            time: 18507
          },
          {
            note: 60,
            velocity: 120,
            time: 18511
          },
          {
            note: 71,
            velocity: 120,
            time: 19111
          },
          {
            note: 72,
            velocity: 120,
            time: 19307
          },
          {
            note: 74,
            velocity: 120,
            time: 19511
          },
          {
            note: 76,
            velocity: 120,
            time: 19707
          },
          {
            note: 67,
            velocity: 120,
            time: 20307
          },
          {
            note: 77,
            velocity: 120,
            time: 20507
          },
          {
            note: 76,
            velocity: 120,
            time: 20707
          },
          {
            note: 74,
            velocity: 120,
            time: 20911
          },
          {
            note: 65,
            velocity: 120,
            time: 21511
          },
          {
            note: 76,
            velocity: 120,
            time: 21711
          },
          {
            note: 74,
            velocity: 120,
            time: 21911
          },
          {
            note: 72,
            velocity: 120,
            time: 22107
          },
          {
            note: 64,
            velocity: 120,
            time: 22707
          },
          {
            note: 74,
            velocity: 120,
            time: 22907
          },
          {
            note: 72,
            velocity: 120,
            time: 23111
          },
          {
            note: 71,
            velocity: 120,
            time: 23307
          },
          {
            note: 64,
            velocity: 120,
            time: 23911
          },
          {
            note: 76,
            velocity: 120,
            time: 24111
          },
          {
            note: 76,
            velocity: 120,
            time: 24711
          },
          {
            note: 88,
            velocity: 120,
            time: 24911
          },
          {
            note: 75,
            velocity: 120,
            time: 25507
          },
          {
            note: 76,
            velocity: 120,
            time: 25711
          },
          {
            note: 75,
            velocity: 120,
            time: 26307
          },
          {
            note: 76,
            velocity: 120,
            time: 26511
          },
          {
            note: 75,
            velocity: 120,
            time: 26712
          },
          {
            note: 76,
            velocity: 120,
            time: 26914
          },
          {
            note: 75,
            velocity: 120,
            time: 27122
          },
          {
            note: 76,
            velocity: 120,
            time: 27341
          },
          {
            note: 71,
            velocity: 120,
            time: 27572
          },
          {
            note: 74,
            velocity: 120,
            time: 27806
          },
          {
            note: 72,
            velocity: 120,
            time: 28035
          },
          {
            note: 69,
            velocity: 120,
            time: 28270
          },
          {
            note: 60,
            velocity: 120,
            time: 28913
          },
          {
            note: 64,
            velocity: 120,
            time: 29116
          },
          {
            note: 69,
            velocity: 120,
            time: 29316
          },
          {
            note: 71,
            velocity: 120,
            time: 29520
          },
          {
            note: 64,
            velocity: 120,
            time: 30120
          },
          {
            note: 68,
            velocity: 120,
            time: 30316
          },
          {
            note: 71,
            velocity: 120,
            time: 30520
          },
          {
            note: 72,
            velocity: 120,
            time: 30720
          },
          {
            note: 64,
            velocity: 120,
            time: 31320
          },
          {
            note: 76,
            velocity: 120,
            time: 31516
          },
          {
            note: 75,
            velocity: 120,
            time: 31720
          },
          {
            note: 76,
            velocity: 120,
            time: 31920
          },
          {
            note: 75,
            velocity: 120,
            time: 32116
          },
          {
            note: 76,
            velocity: 120,
            time: 32320
          },
          {
            note: 71,
            velocity: 120,
            time: 32516
          },
          {
            note: 74,
            velocity: 120,
            time: 32720
          },
          {
            note: 72,
            velocity: 120,
            time: 32920
          },
          {
            note: 69,
            velocity: 120,
            time: 33120
          },
          {
            note: 60,
            velocity: 120,
            time: 33716
          },
          {
            note: 64,
            velocity: 120,
            time: 33916
          },
          {
            note: 69,
            velocity: 120,
            time: 34120
          },
          {
            note: 71,
            velocity: 120,
            time: 34316
          },
          {
            note: 62,
            velocity: 120,
            time: 34916
          },
          {
            note: 72,
            velocity: 120,
            time: 35116
          },
          {
            note: 71,
            velocity: 120,
            time: 35320
          },
          {
            note: 69,
            velocity: 120,
            time: 35520
          },
          {
            note: 60,
            velocity: 120,
            time: 35520
          },
          {
            note: 71,
            velocity: 120,
            time: 36116
          },
          {
            note: 72,
            velocity: 120,
            time: 36316
          },
          {
            note: 74,
            velocity: 120,
            time: 36516
          },
          {
            note: 76,
            velocity: 120,
            time: 36716
          },
          {
            note: 67,
            velocity: 120,
            time: 37316
          },
          {
            note: 77,
            velocity: 120,
            time: 37516
          },
          {
            note: 76,
            velocity: 120,
            time: 37720
          },
          {
            note: 74,
            velocity: 120,
            time: 37916
          },
          {
            note: 65,
            velocity: 120,
            time: 38520
          },
          {
            note: 76,
            velocity: 120,
            time: 38720
          },
          {
            note: 74,
            velocity: 120,
            time: 38920
          },
          {
            note: 72,
            velocity: 120,
            time: 39116
          },
          {
            note: 64,
            velocity: 120,
            time: 39720
          },
          {
            note: 74,
            velocity: 120,
            time: 39916
          },
          {
            note: 72,
            velocity: 120,
            time: 40116
          },
          {
            note: 71,
            velocity: 120,
            time: 40320
          },
          {
            note: 64,
            velocity: 120,
            time: 40920
          },
          {
            note: 76,
            velocity: 120,
            time: 41116
          },
          {
            note: 76,
            velocity: 120,
            time: 41720
          },
          {
            note: 88,
            velocity: 120,
            time: 41920
          },
          {
            note: 75,
            velocity: 120,
            time: 42516
          },
          {
            note: 76,
            velocity: 120,
            time: 42716
          },
          {
            note: 75,
            velocity: 120,
            time: 43316
          },
          {
            note: 76,
            velocity: 120,
            time: 43526
          },
          {
            note: 75,
            velocity: 120,
            time: 43731
          },
          {
            note: 76,
            velocity: 120,
            time: 43950
          },
          {
            note: 75,
            velocity: 120,
            time: 44164
          },
          {
            note: 76,
            velocity: 120,
            time: 44395
          },
          {
            note: 71,
            velocity: 120,
            time: 44624
          },
          {
            note: 74,
            velocity: 120,
            time: 44868
          },
          {
            note: 72,
            velocity: 120,
            time: 45119
          },
          {
            note: 69,
            velocity: 120,
            time: 45357
          },
          {
            note: 60,
            velocity: 120,
            time: 46037
          },
          {
            note: 64,
            velocity: 120,
            time: 46251
          },
          {
            note: 69,
            velocity: 120,
            time: 46448
          },
          {
            note: 71,
            velocity: 120,
            time: 46648
          },
          {
            note: 64,
            velocity: 120,
            time: 47248
          },
          {
            note: 68,
            velocity: 120,
            time: 47448
          },
          {
            note: 71,
            velocity: 120,
            time: 47652
          },
          {
            note: 72,
            velocity: 120,
            time: 47852
          },
          {
            note: 64,
            velocity: 120,
            time: 48452
          },
          {
            note: 76,
            velocity: 120,
            time: 48652
          },
          {
            note: 75,
            velocity: 120,
            time: 48852
          },
          {
            note: 76,
            velocity: 120,
            time: 49048
          },
          {
            note: 75,
            velocity: 120,
            time: 49248
          },
          {
            note: 76,
            velocity: 120,
            time: 49452
          },
          {
            note: 71,
            velocity: 120,
            time: 49652
          },
          {
            note: 74,
            velocity: 120,
            time: 49852
          },
          {
            note: 72,
            velocity: 120,
            time: 50048
          },
          {
            note: 69,
            velocity: 120,
            time: 50248
          },
          {
            note: 60,
            velocity: 120,
            time: 50852
          },
          {
            note: 64,
            velocity: 120,
            time: 51048
          },
          {
            note: 69,
            velocity: 120,
            time: 51248
          },
          {
            note: 71,
            velocity: 120,
            time: 51448
          },
          {
            note: 62,
            velocity: 120,
            time: 52052
          },
          {
            note: 72,
            velocity: 120,
            time: 52252
          },
          {
            note: 71,
            velocity: 120,
            time: 52452
          },
          {
            note: 69,
            velocity: 120,
            time: 52648
          },
          {
            note: 60,
            velocity: 120,
            time: 52652
          },
          {
            note: 72,
            velocity: 120,
            time: 53252
          },
          {
            note: 64,
            velocity: 120,
            time: 53252
          },
          {
            note: 65,
            velocity: 120,
            time: 53449
          },
          {
            note: 72,
            velocity: 120,
            time: 53453
          },
          {
            note: 72,
            velocity: 120,
            time: 53656
          },
          {
            note: 64,
            velocity: 120,
            time: 53660
          },
          {
            note: 67,
            velocity: 120,
            time: 53660
          },
          {
            note: 72,
            velocity: 120,
            time: 53866
          },
          {
            note: 77,
            velocity: 120,
            time: 54799
          },
          {
            note: 76,
            velocity: 120,
            time: 55162
          },
          {
            note: 76,
            velocity: 120,
            time: 55283
          },
          {
            note: 74,
            velocity: 120,
            time: 55751
          },
          {
            note: 82,
            velocity: 120,
            time: 56197
          },
          {
            note: 81,
            velocity: 120,
            time: 56528
          },
          {
            note: 81,
            velocity: 120,
            time: 56636
          },
          {
            note: 79,
            velocity: 120,
            time: 56849
          },
          {
            note: 77,
            velocity: 120,
            time: 57067
          },
          {
            note: 76,
            velocity: 120,
            time: 57284
          },
          {
            note: 74,
            velocity: 120,
            time: 57506
          },
          {
            note: 72,
            velocity: 120,
            time: 57719
          },
          {
            note: 70,
            velocity: 120,
            time: 57936
          },
          {
            note: 69,
            velocity: 120,
            time: 58375
          },
          {
            note: 70,
            velocity: 120,
            time: 58702
          },
          {
            note: 69,
            velocity: 120,
            time: 58810
          },
          {
            note: 67,
            velocity: 120,
            time: 58919
          },
          {
            note: 69,
            velocity: 120,
            time: 59023
          },
          {
            note: 70,
            velocity: 120,
            time: 59136
          },
          {
            note: 72,
            velocity: 120,
            time: 59241
          },
          {
            note: 74,
            velocity: 120,
            time: 60115
          },
          {
            note: 75,
            velocity: 120,
            time: 60332
          },
          {
            note: 76,
            velocity: 120,
            time: 60549
          },
          {
            note: 76,
            velocity: 120,
            time: 61202
          },
          {
            note: 77,
            velocity: 120,
            time: 61414
          },
          {
            note: 69,
            velocity: 120,
            time: 61632
          },
          {
            note: 72,
            velocity: 120,
            time: 61849
          },
          {
            note: 74,
            velocity: 120,
            time: 62289
          },
          {
            note: 72,
            velocity: 120,
            time: 62397
          },
          {
            note: 71,
            velocity: 120,
            time: 62506
          },
          {
            note: 72,
            velocity: 120,
            time: 62610
          },
          {
            note: 74,
            velocity: 120,
            time: 62719
          },
          {
            note: 71,
            velocity: 120,
            time: 63045
          },
          {
            note: 72,
            velocity: 120,
            time: 63158
          },
          {
            note: 79,
            velocity: 120,
            time: 63262
          },
          {
            note: 67,
            velocity: 120,
            time: 63375
          },
          {
            note: 79,
            velocity: 120,
            time: 63484
          },
          {
            note: 69,
            velocity: 120,
            time: 63593
          },
          {
            note: 79,
            velocity: 120,
            time: 63697
          },
          {
            note: 71,
            velocity: 120,
            time: 63806
          },
          {
            note: 79,
            velocity: 120,
            time: 63919
          },
          {
            note: 72,
            velocity: 120,
            time: 64023
          },
          {
            note: 79,
            velocity: 120,
            time: 64136
          },
          {
            note: 74,
            velocity: 120,
            time: 64241
          },
          {
            note: 79,
            velocity: 120,
            time: 64349
          },
          {
            note: 76,
            velocity: 120,
            time: 64458
          },
          {
            note: 79,
            velocity: 120,
            time: 64571
          },
          {
            note: 84,
            velocity: 120,
            time: 64675
          },
          {
            note: 83,
            velocity: 120,
            time: 64789
          },
          {
            note: 81,
            velocity: 120,
            time: 64897
          },
          {
            note: 79,
            velocity: 120,
            time: 65001
          },
          {
            note: 77,
            velocity: 120,
            time: 65110
          },
          {
            note: 76,
            velocity: 120,
            time: 65223
          },
          {
            note: 74,
            velocity: 120,
            time: 65332
          },
          {
            note: 79,
            velocity: 120,
            time: 65436
          },
          {
            note: 77,
            velocity: 120,
            time: 65545
          },
          {
            note: 74,
            velocity: 120,
            time: 65658
          },
          {
            note: 72,
            velocity: 120,
            time: 65767
          },
          {
            note: 79,
            velocity: 120,
            time: 65875
          },
          {
            note: 67,
            velocity: 120,
            time: 65984
          },
          {
            note: 79,
            velocity: 120,
            time: 66093
          },
          {
            note: 69,
            velocity: 120,
            time: 66197
          },
          {
            note: 79,
            velocity: 120,
            time: 66310
          },
          {
            note: 71,
            velocity: 120,
            time: 66419
          },
          {
            note: 79,
            velocity: 120,
            time: 66523
          },
          {
            note: 72,
            velocity: 120,
            time: 66632
          },
          {
            note: 79,
            velocity: 120,
            time: 66741
          },
          {
            note: 74,
            velocity: 120,
            time: 66849
          },
          {
            note: 79,
            velocity: 120,
            time: 66962
          },
          {
            note: 76,
            velocity: 120,
            time: 67071
          },
          {
            note: 79,
            velocity: 120,
            time: 67180
          },
          {
            note: 84,
            velocity: 120,
            time: 67289
          },
          {
            note: 83,
            velocity: 120,
            time: 67397
          },
          {
            note: 81,
            velocity: 120,
            time: 67501
          },
          {
            note: 79,
            velocity: 120,
            time: 67615
          },
          {
            note: 77,
            velocity: 120,
            time: 67719
          },
          {
            note: 76,
            velocity: 120,
            time: 67827
          },
          {
            note: 74,
            velocity: 120,
            time: 67936
          },
          {
            note: 79,
            velocity: 120,
            time: 68049
          },
          {
            note: 77,
            velocity: 120,
            time: 68154
          },
          {
            note: 74,
            velocity: 120,
            time: 68267
          },
          {
            note: 76,
            velocity: 120,
            time: 68371
          },
          {
            note: 77,
            velocity: 120,
            time: 68484
          },
          {
            note: 76,
            velocity: 120,
            time: 68588
          },
          {
            note: 75,
            velocity: 120,
            time: 68697
          },
          {
            note: 76,
            velocity: 120,
            time: 68810
          },
          {
            note: 71,
            velocity: 120,
            time: 68919
          },
          {
            note: 76,
            velocity: 120,
            time: 69028
          },
          {
            note: 75,
            velocity: 120,
            time: 69136
          },
          {
            note: 76,
            velocity: 120,
            time: 69245
          },
          {
            note: 71,
            velocity: 120,
            time: 69349
          },
          {
            note: 76,
            velocity: 120,
            time: 69462
          },
          {
            note: 75,
            velocity: 120,
            time: 69571
          },
          {
            note: 76,
            velocity: 120,
            time: 69675
          },
          {
            note: 71,
            velocity: 120,
            time: 70383
          },
          {
            note: 76,
            velocity: 120,
            time: 70652
          },
          {
            note: 75,
            velocity: 120,
            time: 70926
          },
          {
            note: 76,
            velocity: 120,
            time: 71203
          },
          {
            note: 71,
            velocity: 120,
            time: 72098
          },
          {
            note: 76,
            velocity: 120,
            time: 72411
          },
          {
            note: 75,
            velocity: 120,
            time: 73396
          },
          {
            note: 76,
            velocity: 120,
            time: 73715
          },
          {
            note: 75,
            velocity: 120,
            time: 74632
          },
          {
            note: 76,
            velocity: 120,
            time: 74904
          },
          {
            note: 75,
            velocity: 120,
            time: 75143
          },
          {
            note: 76,
            velocity: 120,
            time: 75360
          },
          {
            note: 71,
            velocity: 120,
            time: 75557
          },
          {
            note: 74,
            velocity: 120,
            time: 75755
          },
          {
            note: 72,
            velocity: 120,
            time: 75956
          },
          {
            note: 69,
            velocity: 120,
            time: 76150
          },
          {
            note: 60,
            velocity: 120,
            time: 76746
          },
          {
            note: 64,
            velocity: 120,
            time: 76943
          },
          {
            note: 69,
            velocity: 120,
            time: 77141
          },
          {
            note: 71,
            velocity: 120,
            time: 77338
          },
          {
            note: 64,
            velocity: 120,
            time: 77926
          },
          {
            note: 68,
            velocity: 120,
            time: 78127
          },
          {
            note: 71,
            velocity: 120,
            time: 78325
          },
          {
            note: 72,
            velocity: 120,
            time: 78518
          },
          {
            note: 64,
            velocity: 120,
            time: 79110
          },
          {
            note: 76,
            velocity: 120,
            time: 79312
          },
          {
            note: 75,
            velocity: 120,
            time: 79509
          },
          {
            note: 76,
            velocity: 120,
            time: 79702
          },
          {
            note: 75,
            velocity: 120,
            time: 79904
          },
          {
            note: 76,
            velocity: 120,
            time: 80097
          },
          {
            note: 71,
            velocity: 120,
            time: 80298
          },
          {
            note: 74,
            velocity: 120,
            time: 80496
          },
          {
            note: 72,
            velocity: 120,
            time: 80693
          },
          {
            note: 69,
            velocity: 120,
            time: 80891
          },
          {
            note: 60,
            velocity: 120,
            time: 81479
          },
          {
            note: 64,
            velocity: 120,
            time: 81676
          },
          {
            note: 69,
            velocity: 120,
            time: 81873
          },
          {
            note: 71,
            velocity: 120,
            time: 82071
          },
          {
            note: 62,
            velocity: 120,
            time: 82663
          },
          {
            note: 72,
            velocity: 120,
            time: 82864
          },
          {
            note: 71,
            velocity: 120,
            time: 83062
          },
          {
            note: 69,
            velocity: 120,
            time: 83259
          },
          {
            note: 60,
            velocity: 120,
            time: 83259
          },
          {
            note: 71,
            velocity: 120,
            time: 83847
          },
          {
            note: 72,
            velocity: 120,
            time: 84048
          },
          {
            note: 74,
            velocity: 120,
            time: 84246
          },
          {
            note: 76,
            velocity: 120,
            time: 84443
          },
          {
            note: 67,
            velocity: 120,
            time: 85035
          },
          {
            note: 77,
            velocity: 120,
            time: 85233
          },
          {
            note: 76,
            velocity: 120,
            time: 85426
          },
          {
            note: 74,
            velocity: 120,
            time: 85627
          },
          {
            note: 65,
            velocity: 120,
            time: 86215
          },
          {
            note: 76,
            velocity: 120,
            time: 86413
          },
          {
            note: 74,
            velocity: 120,
            time: 86614
          },
          {
            note: 72,
            velocity: 120,
            time: 86812
          },
          {
            note: 64,
            velocity: 120,
            time: 87400
          },
          {
            note: 74,
            velocity: 120,
            time: 87601
          },
          {
            note: 72,
            velocity: 120,
            time: 87794
          },
          {
            note: 71,
            velocity: 120,
            time: 87992
          },
          {
            note: 64,
            velocity: 120,
            time: 88588
          },
          {
            note: 76,
            velocity: 120,
            time: 88781
          },
          {
            note: 76,
            velocity: 120,
            time: 89377
          },
          {
            note: 88,
            velocity: 120,
            time: 89571
          },
          {
            note: 75,
            velocity: 120,
            time: 90163
          },
          {
            note: 76,
            velocity: 120,
            time: 90364
          },
          {
            note: 75,
            velocity: 120,
            time: 90956
          },
          {
            note: 76,
            velocity: 120,
            time: 91154
          },
          {
            note: 75,
            velocity: 120,
            time: 91347
          },
          {
            note: 76,
            velocity: 120,
            time: 91544
          },
          {
            note: 75,
            velocity: 120,
            time: 91742
          },
          {
            note: 76,
            velocity: 120,
            time: 91943
          },
          {
            note: 71,
            velocity: 120,
            time: 92136
          },
          {
            note: 74,
            velocity: 120,
            time: 92334
          },
          {
            note: 72,
            velocity: 120,
            time: 92531
          },
          {
            note: 69,
            velocity: 120,
            time: 92733
          },
          {
            note: 60,
            velocity: 120,
            time: 93321
          },
          {
            note: 64,
            velocity: 120,
            time: 93518
          },
          {
            note: 69,
            velocity: 120,
            time: 93715
          },
          {
            note: 71,
            velocity: 120,
            time: 93917
          },
          {
            note: 64,
            velocity: 120,
            time: 94505
          },
          {
            note: 68,
            velocity: 120,
            time: 94706
          },
          {
            note: 71,
            velocity: 120,
            time: 94904
          },
          {
            note: 72,
            velocity: 120,
            time: 95101
          },
          {
            note: 64,
            velocity: 120,
            time: 95693
          },
          {
            note: 76,
            velocity: 120,
            time: 95891
          },
          {
            note: 75,
            velocity: 120,
            time: 96084
          },
          {
            note: 76,
            velocity: 120,
            time: 96285
          },
          {
            note: 75,
            velocity: 120,
            time: 96483
          },
          {
            note: 76,
            velocity: 120,
            time: 96676
          },
          {
            note: 71,
            velocity: 120,
            time: 96877
          },
          {
            note: 74,
            velocity: 120,
            time: 97075
          },
          {
            note: 72,
            velocity: 120,
            time: 97272
          },
          {
            note: 69,
            velocity: 120,
            time: 97469
          },
          {
            note: 60,
            velocity: 120,
            time: 98057
          },
          {
            note: 64,
            velocity: 120,
            time: 98255
          },
          {
            note: 69,
            velocity: 120,
            time: 98456
          },
          {
            note: 71,
            velocity: 120,
            time: 98650
          },
          {
            note: 62,
            velocity: 120,
            time: 99246
          },
          {
            note: 72,
            velocity: 120,
            time: 99439
          },
          {
            note: 71,
            velocity: 120,
            time: 99636
          },
          {
            note: 69,
            velocity: 120,
            time: 99834
          },
          {
            note: 60,
            velocity: 120,
            time: 99838
          },
          {
            note: 70,
            velocity: 120,
            time: 101018
          },
          {
            note: 64,
            velocity: 120,
            time: 101018
          },
          {
            note: 73,
            velocity: 120,
            time: 101022
          },
          {
            note: 67,
            velocity: 120,
            time: 101022
          },
          {
            note: 74,
            velocity: 120,
            time: 102202
          },
          {
            note: 65,
            velocity: 120,
            time: 102206
          },
          {
            note: 69,
            velocity: 120,
            time: 102206
          },
          {
            note: 73,
            velocity: 120,
            time: 102992
          },
          {
            note: 76,
            velocity: 120,
            time: 102996
          },
          {
            note: 77,
            velocity: 120,
            time: 103189
          },
          {
            note: 74,
            velocity: 120,
            time: 103193
          },
          {
            note: 68,
            velocity: 120,
            time: 103386
          },
          {
            note: 74,
            velocity: 120,
            time: 103391
          },
          {
            note: 77,
            velocity: 120,
            time: 103391
          },
          {
            note: 68,
            velocity: 120,
            time: 104176
          },
          {
            note: 74,
            velocity: 120,
            time: 104180
          },
          {
            note: 77,
            velocity: 120,
            time: 104180
          },
          {
            note: 72,
            velocity: 120,
            time: 104571
          },
          {
            note: 76,
            velocity: 120,
            time: 104575
          },
          {
            note: 69,
            velocity: 120,
            time: 104575
          },
          {
            note: 74,
            velocity: 120,
            time: 105755
          },
          {
            note: 65,
            velocity: 120,
            time: 105759
          },
          {
            note: 72,
            velocity: 120,
            time: 106548
          },
          {
            note: 64,
            velocity: 120,
            time: 106548
          },
          {
            note: 71,
            velocity: 120,
            time: 106746
          },
          {
            note: 62,
            velocity: 120,
            time: 106746
          },
          {
            note: 60,
            velocity: 120,
            time: 106939
          },
          {
            note: 69,
            velocity: 120,
            time: 106939
          },
          {
            note: 66,
            velocity: 120,
            time: 106939
          },
          {
            note: 69,
            velocity: 120,
            time: 107729
          },
          {
            note: 60,
            velocity: 120,
            time: 107733
          },
          {
            note: 60,
            velocity: 120,
            time: 108123
          },
          {
            note: 69,
            velocity: 120,
            time: 108127
          },
          {
            note: 72,
            velocity: 120,
            time: 108518
          },
          {
            note: 64,
            velocity: 120,
            time: 108522
          },
          {
            note: 62,
            velocity: 120,
            time: 108913
          },
          {
            note: 71,
            velocity: 120,
            time: 108917
          },
          {
            note: 60,
            velocity: 120,
            time: 109307
          },
          {
            note: 69,
            velocity: 120,
            time: 109307
          },
          {
            note: 64,
            velocity: 120,
            time: 110492
          },
          {
            note: 67,
            velocity: 120,
            time: 110492
          },
          {
            note: 73,
            velocity: 120,
            time: 110492
          },
          {
            note: 70,
            velocity: 120,
            time: 110496
          },
          {
            note: 69,
            velocity: 120,
            time: 111676
          },
          {
            note: 74,
            velocity: 120,
            time: 111680
          },
          {
            note: 65,
            velocity: 120,
            time: 111680
          },
          {
            note: 76,
            velocity: 120,
            time: 112465
          },
          {
            note: 73,
            velocity: 120,
            time: 112469
          },
          {
            note: 77,
            velocity: 120,
            time: 112663
          },
          {
            note: 74,
            velocity: 120,
            time: 112667
          },
          {
            note: 77,
            velocity: 120,
            time: 112860
          },
          {
            note: 74,
            velocity: 120,
            time: 112864
          },
          {
            note: 77,
            velocity: 120,
            time: 113654
          },
          {
            note: 74,
            velocity: 120,
            time: 113654
          },
          {
            note: 77,
            velocity: 120,
            time: 114044
          },
          {
            note: 74,
            velocity: 120,
            time: 114048
          },
          {
            note: 67,
            velocity: 120,
            time: 115228
          },
          {
            note: 75,
            velocity: 120,
            time: 115233
          },
          {
            note: 65,
            velocity: 120,
            time: 116018
          },
          {
            note: 74,
            velocity: 120,
            time: 116022
          },
          {
            note: 72,
            velocity: 120,
            time: 116215
          },
          {
            note: 63,
            velocity: 120,
            time: 116215
          },
          {
            note: 70,
            velocity: 120,
            time: 116413
          },
          {
            note: 65,
            velocity: 120,
            time: 116417
          },
          {
            note: 62,
            velocity: 120,
            time: 116417
          },
          {
            note: 69,
            velocity: 120,
            time: 117202
          },
          {
            note: 65,
            velocity: 120,
            time: 117202
          },
          {
            note: 62,
            velocity: 120,
            time: 117206
          },
          {
            note: 68,
            velocity: 120,
            time: 117601
          },
          {
            note: 65,
            velocity: 120,
            time: 117601
          },
          {
            note: 62,
            velocity: 120,
            time: 117601
          },
          {
            note: 62,
            velocity: 120,
            time: 118386
          },
          {
            note: 65,
            velocity: 120,
            time: 118386
          },
          {
            note: 68,
            velocity: 120,
            time: 118391
          },
          {
            note: 69,
            velocity: 120,
            time: 118781
          },
          {
            note: 60,
            velocity: 120,
            time: 118781
          },
          {
            note: 64,
            velocity: 120,
            time: 118785
          },
          {
            note: 64,
            velocity: 120,
            time: 119965
          },
          {
            note: 71,
            velocity: 120,
            time: 119965
          },
          {
            note: 57,
            velocity: 120,
            time: 121150
          },
          {
            note: 60,
            velocity: 120,
            time: 121285
          },
          {
            note: 64,
            velocity: 120,
            time: 121417
          },
          {
            note: 69,
            velocity: 120,
            time: 121548
          },
          {
            note: 72,
            velocity: 120,
            time: 121680
          },
          {
            note: 76,
            velocity: 120,
            time: 121807
          },
          {
            note: 74,
            velocity: 120,
            time: 121943
          },
          {
            note: 72,
            velocity: 120,
            time: 122073
          },
          {
            note: 71,
            velocity: 120,
            time: 122215
          },
          {
            note: 69,
            velocity: 120,
            time: 122356
          },
          {
            note: 72,
            velocity: 120,
            time: 122502
          },
          {
            note: 76,
            velocity: 120,
            time: 122653
          },
          {
            note: 81,
            velocity: 120,
            time: 122809
          },
          {
            note: 84,
            velocity: 120,
            time: 122964
          },
          {
            note: 88,
            velocity: 120,
            time: 123130
          },
          {
            note: 86,
            velocity: 120,
            time: 123300
          },
          {
            note: 84,
            velocity: 120,
            time: 123477
          },
          {
            note: 83,
            velocity: 120,
            time: 123658
          },
          {
            note: 81,
            velocity: 120,
            time: 123845
          },
          {
            note: 84,
            velocity: 120,
            time: 124022
          },
          {
            note: 88,
            velocity: 120,
            time: 124211
          },
          {
            note: 93,
            velocity: 120,
            time: 124391
          },
          {
            note: 96,
            velocity: 120,
            time: 124586
          },
          {
            note: 100,
            velocity: 120,
            time: 124774
          },
          {
            note: 98,
            velocity: 120,
            time: 124963
          },
          {
            note: 96,
            velocity: 120,
            time: 125152
          },
          {
            note: 95,
            velocity: 120,
            time: 125340
          },
          {
            note: 94,
            velocity: 120,
            time: 125529
          },
          {
            note: 93,
            velocity: 120,
            time: 125718
          },
          {
            note: 92,
            velocity: 120,
            time: 125906
          },
          {
            note: 91,
            velocity: 120,
            time: 126094
          },
          {
            note: 90,
            velocity: 120,
            time: 126278
          },
          {
            note: 89,
            velocity: 120,
            time: 126459
          },
          {
            note: 88,
            velocity: 120,
            time: 126634
          },
          {
            note: 87,
            velocity: 120,
            time: 126817
          },
          {
            note: 86,
            velocity: 120,
            time: 126984
          },
          {
            note: 85,
            velocity: 120,
            time: 127154
          },
          {
            note: 84,
            velocity: 120,
            time: 127326
          },
          {
            note: 83,
            velocity: 120,
            time: 127492
          },
          {
            note: 82,
            velocity: 120,
            time: 127654
          },
          {
            note: 81,
            velocity: 120,
            time: 127826
          },
          {
            note: 80,
            velocity: 120,
            time: 127987
          },
          {
            note: 79,
            velocity: 120,
            time: 128154
          },
          {
            note: 78,
            velocity: 120,
            time: 128322
          },
          {
            note: 77,
            velocity: 120,
            time: 128482
          },
          {
            note: 76,
            velocity: 120,
            time: 128633
          },
          {
            note: 75,
            velocity: 120,
            time: 128862
          },
          {
            note: 76,
            velocity: 120,
            time: 129089
          },
          {
            note: 71,
            velocity: 120,
            time: 129299
          },
          {
            note: 74,
            velocity: 120,
            time: 129511
          },
          {
            note: 72,
            velocity: 120,
            time: 129708
          },
          {
            note: 69,
            velocity: 120,
            time: 129912
          },
          {
            note: 60,
            velocity: 120,
            time: 130512
          },
          {
            note: 64,
            velocity: 120,
            time: 130712
          },
          {
            note: 69,
            velocity: 120,
            time: 130908
          },
          {
            note: 71,
            velocity: 120,
            time: 131108
          },
          {
            note: 64,
            velocity: 120,
            time: 131712
          },
          {
            note: 68,
            velocity: 120,
            time: 131912
          },
          {
            note: 71,
            velocity: 120,
            time: 132108
          },
          {
            note: 72,
            velocity: 120,
            time: 132312
          },
          {
            note: 64,
            velocity: 120,
            time: 132908
          },
          {
            note: 76,
            velocity: 120,
            time: 133108
          },
          {
            note: 75,
            velocity: 120,
            time: 133312
          },
          {
            note: 76,
            velocity: 120,
            time: 133508
          },
          {
            note: 75,
            velocity: 120,
            time: 133708
          },
          {
            note: 76,
            velocity: 120,
            time: 133912
          },
          {
            note: 71,
            velocity: 120,
            time: 134108
          },
          {
            note: 74,
            velocity: 120,
            time: 134308
          },
          {
            note: 72,
            velocity: 120,
            time: 134508
          },
          {
            note: 69,
            velocity: 120,
            time: 134708
          },
          {
            note: 60,
            velocity: 120,
            time: 135308
          },
          {
            note: 64,
            velocity: 120,
            time: 135508
          },
          {
            note: 69,
            velocity: 120,
            time: 135708
          },
          {
            note: 71,
            velocity: 120,
            time: 135912
          },
          {
            note: 62,
            velocity: 120,
            time: 136512
          },
          {
            note: 72,
            velocity: 120,
            time: 136712
          },
          {
            note: 71,
            velocity: 120,
            time: 136912
          },
          {
            note: 60,
            velocity: 120,
            time: 137108
          },
          {
            note: 69,
            velocity: 120,
            time: 137112
          },
          {
            note: 71,
            velocity: 120,
            time: 137708
          },
          {
            note: 72,
            velocity: 120,
            time: 137912
          },
          {
            note: 74,
            velocity: 120,
            time: 138108
          },
          {
            note: 76,
            velocity: 120,
            time: 138308
          },
          {
            note: 67,
            velocity: 120,
            time: 138912
          },
          {
            note: 77,
            velocity: 120,
            time: 139112
          },
          {
            note: 76,
            velocity: 120,
            time: 139312
          },
          {
            note: 74,
            velocity: 120,
            time: 139508
          },
          {
            note: 65,
            velocity: 120,
            time: 140112
          },
          {
            note: 76,
            velocity: 120,
            time: 140312
          },
          {
            note: 74,
            velocity: 120,
            time: 140512
          },
          {
            note: 72,
            velocity: 120,
            time: 140712
          },
          {
            note: 64,
            velocity: 120,
            time: 141312
          },
          {
            note: 74,
            velocity: 120,
            time: 141508
          },
          {
            note: 72,
            velocity: 120,
            time: 141708
          },
          {
            note: 71,
            velocity: 120,
            time: 141908
          },
          {
            note: 64,
            velocity: 120,
            time: 142508
          },
          {
            note: 76,
            velocity: 120,
            time: 142708
          },
          {
            note: 76,
            velocity: 120,
            time: 143312
          },
          {
            note: 88,
            velocity: 120,
            time: 143512
          },
          {
            note: 75,
            velocity: 120,
            time: 144108
          },
          {
            note: 76,
            velocity: 120,
            time: 144308
          },
          {
            note: 75,
            velocity: 120,
            time: 144908
          },
          {
            note: 76,
            velocity: 120,
            time: 145112
          },
          {
            note: 75,
            velocity: 120,
            time: 145312
          },
          {
            note: 76,
            velocity: 120,
            time: 145508
          },
          {
            note: 75,
            velocity: 120,
            time: 145708
          },
          {
            note: 76,
            velocity: 120,
            time: 145908
          },
          {
            note: 71,
            velocity: 120,
            time: 146108
          },
          {
            note: 74,
            velocity: 120,
            time: 146308
          },
          {
            note: 72,
            velocity: 120,
            time: 146512
          },
          {
            note: 69,
            velocity: 120,
            time: 146712
          },
          {
            note: 60,
            velocity: 120,
            time: 147312
          },
          {
            note: 64,
            velocity: 120,
            time: 147508
          },
          {
            note: 69,
            velocity: 120,
            time: 147708
          },
          {
            note: 71,
            velocity: 120,
            time: 147908
          },
          {
            note: 64,
            velocity: 120,
            time: 148512
          },
          {
            note: 68,
            velocity: 120,
            time: 148708
          },
          {
            note: 71,
            velocity: 120,
            time: 148912
          },
          {
            note: 72,
            velocity: 120,
            time: 149108
          },
          {
            note: 64,
            velocity: 120,
            time: 149712
          },
          {
            note: 76,
            velocity: 120,
            time: 149908
          },
          {
            note: 75,
            velocity: 120,
            time: 150108
          },
          {
            note: 76,
            velocity: 120,
            time: 150308
          },
          {
            note: 75,
            velocity: 120,
            time: 150512
          },
          {
            note: 76,
            velocity: 120,
            time: 150708
          },
          {
            note: 71,
            velocity: 120,
            time: 150908
          },
          {
            note: 74,
            velocity: 120,
            time: 151112
          },
          {
            note: 72,
            velocity: 120,
            time: 151308
          },
          {
            note: 69,
            velocity: 120,
            time: 151512
          },
          {
            note: 60,
            velocity: 120,
            time: 152126
          },
          {
            note: 64,
            velocity: 120,
            time: 152338
          },
          {
            note: 69,
            velocity: 120,
            time: 152550
          },
          {
            note: 71,
            velocity: 120,
            time: 152765
          },
          {
            note: 62,
            velocity: 120,
            time: 153426
          },
          {
            note: 72,
            velocity: 120,
            time: 153650
          },
          {
            note: 71,
            velocity: 120,
            time: 153875
          },
          {
            note: 60,
            velocity: 120,
            time: 154108
          },
          {
            note: 69,
            velocity: 120,
            time: 154113
          }
        ]
      }
    },
    {
      id: "686ac5cede4ffb5a7ae2ec78",
      name: "ABC Song",
      fileName: "abc-song.mid",
      sections: {
        intro: [
          {
            note: 65,
            velocity: 75,
            time: 0
          },
          {
            note: 65,
            velocity: 75,
            time: 500
          },
          {
            note: 72,
            velocity: 75,
            time: 1000
          },
          {
            note: 65,
            velocity: 75,
            time: 1000
          },
          {
            note: 72,
            velocity: 75,
            time: 1500
          },
          {
            note: 65,
            velocity: 75,
            time: 1500
          },
          {
            note: 74,
            velocity: 75,
            time: 2000
          },
          {
            note: 65,
            velocity: 75,
            time: 2000
          },
          {
            note: 74,
            velocity: 75,
            time: 2500
          },
          {
            note: 65,
            velocity: 75,
            time: 2500
          },
          {
            note: 72,
            velocity: 75,
            time: 3000
          },
          {
            note: 65,
            velocity: 75,
            time: 3000
          },
          {
            note: 70,
            velocity: 75,
            time: 4000
          },
          {
            note: 64,
            velocity: 75,
            time: 4000
          },
          {
            note: 70,
            velocity: 75,
            time: 4500
          },
          {
            note: 64,
            velocity: 75,
            time: 4500
          },
          {
            note: 69,
            velocity: 75,
            time: 5000
          },
          {
            note: 65,
            velocity: 75,
            time: 5000
          },
          {
            note: 69,
            velocity: 75,
            time: 5500
          },
          {
            note: 65,
            velocity: 75,
            time: 5500
          },
          {
            note: 67,
            velocity: 75,
            time: 6000
          },
          {
            note: 62,
            velocity: 75,
            time: 6000
          },
          {
            note: 67,
            velocity: 75,
            time: 6250
          },
          {
            note: 62,
            velocity: 75,
            time: 6250
          },
          {
            note: 67,
            velocity: 75,
            time: 6500
          },
          {
            note: 64,
            velocity: 75,
            time: 6500
          },
          {
            note: 67,
            velocity: 75,
            time: 6750
          },
          {
            note: 64,
            velocity: 75,
            time: 6750
          },
          {
            note: 65,
            velocity: 75,
            time: 7000
          },
          {
            note: 72,
            velocity: 75,
            time: 8000
          },
          {
            note: 65,
            velocity: 75,
            time: 8000
          },
          {
            note: 72,
            velocity: 75,
            time: 8500
          },
          {
            note: 65,
            velocity: 75,
            time: 8500
          },
          {
            note: 70,
            velocity: 75,
            time: 9000
          },
          {
            note: 64,
            velocity: 75,
            time: 9000
          },
          {
            note: 69,
            velocity: 75,
            time: 10000
          },
          {
            note: 60,
            velocity: 75,
            time: 10000
          },
          {
            note: 69,
            velocity: 75,
            time: 10500
          },
          {
            note: 60,
            velocity: 75,
            time: 10500
          },
          {
            note: 67,
            velocity: 75,
            time: 11000
          },
          {
            note: 60,
            velocity: 75,
            time: 11000
          },
          {
            note: 72,
            velocity: 75,
            time: 12000
          },
          {
            note: 65,
            velocity: 75,
            time: 12000
          },
          {
            note: 72,
            velocity: 75,
            time: 12250
          },
          {
            note: 65,
            velocity: 75,
            time: 12250
          },
          {
            note: 72,
            velocity: 75,
            time: 12500
          },
          {
            note: 65,
            velocity: 75,
            time: 12500
          },
          {
            note: 70,
            velocity: 75,
            time: 13000
          },
          {
            note: 64,
            velocity: 75,
            time: 13000
          },
          {
            note: 69,
            velocity: 75,
            time: 14000
          },
          {
            note: 60,
            velocity: 75,
            time: 14000
          },
          {
            note: 69,
            velocity: 75,
            time: 14500
          },
          {
            note: 60,
            velocity: 75,
            time: 14500
          },
          {
            note: 67,
            velocity: 75,
            time: 15000
          },
          {
            note: 60,
            velocity: 75,
            time: 15000
          },
          {
            note: 65,
            velocity: 75,
            time: 16000
          },
          {
            note: 65,
            velocity: 75,
            time: 16500
          },
          {
            note: 72,
            velocity: 75,
            time: 17000
          },
          {
            note: 65,
            velocity: 75,
            time: 17000
          },
          {
            note: 72,
            velocity: 75,
            time: 17500
          },
          {
            note: 65,
            velocity: 75,
            time: 17500
          },
          {
            note: 74,
            velocity: 75,
            time: 18000
          },
          {
            note: 65,
            velocity: 75,
            time: 18000
          },
          {
            note: 74,
            velocity: 75,
            time: 18500
          },
          {
            note: 65,
            velocity: 75,
            time: 18500
          },
          {
            note: 72,
            velocity: 75,
            time: 19000
          },
          {
            note: 65,
            velocity: 75,
            time: 19000
          },
          {
            note: 70,
            velocity: 75,
            time: 20000
          },
          {
            note: 64,
            velocity: 75,
            time: 20000
          },
          {
            note: 70,
            velocity: 75,
            time: 20500
          },
          {
            note: 64,
            velocity: 75,
            time: 20500
          },
          {
            note: 69,
            velocity: 75,
            time: 21000
          },
          {
            note: 65,
            velocity: 75,
            time: 21000
          },
          {
            note: 69,
            velocity: 75,
            time: 21500
          },
          {
            note: 65,
            velocity: 75,
            time: 21500
          },
          {
            note: 67,
            velocity: 75,
            time: 22000
          },
          {
            note: 62,
            velocity: 75,
            time: 22000
          },
          {
            note: 67,
            velocity: 75,
            time: 22500
          },
          {
            note: 64,
            velocity: 75,
            time: 22500
          },
          {
            note: 65,
            velocity: 75,
            time: 23000
          },
          {
            note: 60,
            velocity: 75,
            time: 23000
          },
          {
            note: 57,
            velocity: 75,
            time: 23000
          }
        ]
      }
    }
  )

  console.log("Seeded reference:", reference)
  await mongoose.disconnect()
}

if (require.main === module) {
  seedReferences().catch(console.error)
}
