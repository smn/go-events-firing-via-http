Pushing Metrics to Go over HTTP
===============================


1. Create a jsbox conversation with `config.js` and `reports.js` uploaded.
2. Create an HTTP (No stream) conversation.
3. Hit it via curl::

    curl -X PUT \
        --user '<account-key>:<token>' \
        --data '[["total_pings", 1200, "MAX"]]' \
        https://go.vumi.org/api/v1/go/http_api_nostream/<conversation-key>/metrics.json \
        -vvv

4. Profit

.. note::

    This API is exactly the same for the streaming and the non-streaming
    HTTP APIs. The only difference is in the path of the URL. Use
    `http_api` for the streaming API and `http_api_nostream` for the non-
    streaming API.

    Whether or not you have access to either of these depends on your
    account permissions.

.. image:: screenshot.png
