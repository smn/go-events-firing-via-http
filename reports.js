{
  "layout": [
    {
      "type": "diamondash.widgets.lvalue.LValueWidget",
      "time_range": "1d",
      "name": "Last Ping Count",
      "target": {
        "metric_type": "account",
        "store": "default",
        "name": "total_pings",
        "aggregator": "max"
      }
    },
    "new_row",
    {
      "type": "diamondash.widgets.graph.GraphWidget",
      "name": "Ping Counts",
      "width": 6,
      "time_range": "1d",
      "bucket_size": "1h",
      "metrics": [
        {
          "name": "Pings",
          "target": {
            "metric_type": "account",
            "store": "default",
            "name": "total_pings",
            "aggregator": "max"
          }
        }
      ]
    }
  ]
}